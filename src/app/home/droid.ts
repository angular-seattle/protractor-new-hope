
export const COMMANDS = {
	"yes": [0x0A,0x17,0x05,0x41,0x00,0x0F],
	"no": [0x0A,0x17,0x05,0x3F,0x00,0x10],
	"happy": [0x0A,0x17,0x05,0x1A,0x00,0x0D],
	"alarm": [0x0A,0x17,0x05,0x17,0x00,0x07],
	//"angry": [0x0A,0x17,0x05,0x18,0x00,0x08],
	"annoyed": [0x0A,0x17,0x05,0x19,0x00,0x09],
	"ionblast": [0x0A,0x17,0x05,0x1A,0x00,0x0E],
	"sad": [0x0A,0x17,0x05,0x1C,0x00,0x11],
	//"scared": [0x0A,0x17,0x05,0x1D,0x00,0x13],
	"chatty": [0x0A,0x17,0x05,0x17,0x00,0x0A],
	//"confident": [0x0A,0x17,0x05,0x18,0x00,0x12],
	"excited": [0x0A,0x17,0x05,0x19,0x00,0x0C],
	"laugh": [0x0A,0x17,0x05,0x1B,0x00,0x0F],
	"surprise": [0x0A,0x17,0x05,0x1C,0x00,0x18],
	"tripod": [0x0A,0x17,0x0D,0x1D,0x01],
  "bipod": [0x0A,0x17,0x0D,0x1C,0x02]
}

export type CommandName = keyof typeof COMMANDS;

// Taken from Spherov2.js https://github.com/igbopie/spherov2.js/blob/master/src/commands/types.ts
// Protocol details from http://synack.net/~bbraun/spherodroid/
export enum ServicesUUID {
	apiV2ControlService = '00010001-574f-4f20-5370-6865726f2121',
	nordicDfuService =    '00020001-574f-4f20-5370-6865726f2121',
}

export enum CharacteristicUUID {
	apiV2Characteristic =       '00010002-574f-4f20-5370-6865726f2121',
	dfuControlCharacteristic =  '00020002-574f-4f20-5370-6865726f2121',
	dfuInfoCharacteristic =     '00020004-574f-4f20-5370-6865726f2121',
	antiDoSCharacteristic =     '00020005-574f-4f20-5370-6865726f2121',
}
  

function crc(bytes: Array<number>) {
	let result = 0;
	for(let b of bytes) {
		result += b;
		result = result % 256;
	}

	return ~result % 256;
}

function buildPacket(bytes: Array<number>) {
	return [0x8D, ...bytes, crc(bytes), 0xD8]
}

export class Droid {
	constructor(private name = "D2-74B7") {};
	api: BluetoothRemoteGATTCharacteristic;
	device: BluetoothDevice;

	async getDevice() {
		this.device = await navigator.bluetooth
				.requestDevice({
					filters: [{ name: this.name }],
					optionalServices: [ServicesUUID.apiV2ControlService, ServicesUUID.nordicDfuService]
				});
	}
	// TODO: Only request the device once.
	// If a command fails, reconnect and retry
	async connect() {
		if (!this.device) {
			await this.getDevice();
		}
		const server = await this.device.gatt.connect();
		const nordicDfu = await server.getPrimaryService(ServicesUUID.nordicDfuService);
		console.log('Service ', nordicDfu);
		// Write the anti-DOS string "Use the force...band"
		await (await nordicDfu.getCharacteristic(CharacteristicUUID.antiDoSCharacteristic)).writeValue(new Uint8Array([0x75,0x73,0x65,0x74,0x68,0x65,0x66,0x6F,0x72,0x63,0x65,0x2E,0x2E,0x2E,0x62,0x61,0x6E,0x64]));

		const controlService = await server.getPrimaryService(ServicesUUID.apiV2ControlService);
		this.api = await controlService.getCharacteristic(CharacteristicUUID.apiV2Characteristic);
		console.log('Service ', controlService);

		await this.api.writeValue(new Uint8Array([0x8D,0x0A,0x13,0x0D,0x00,0xD5,0xD8]));
	}

	async sendCommand(command: CommandName) {
		if (!this.api) {
			await this.connect();
		}
		try {
			await this.api.writeValue(new Uint8Array(buildPacket(COMMANDS[command])));
		} catch(e) {
			console.log('Got err', e);
		}
	}
	
	async disconnect() {
		this.api.writeValue(new Uint8Array([0x8D,0x0A,0x13,0x01,0x17,0xCA,0xD8]));
	}
}