import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface AuthToken {
    user: string,
    timestamp: number
}

const TOKEN_EXPIRATION = 300000 // 5 minutes

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  public isAuthenticated(): boolean {
      if(!this.readToken()) {
          return false;
      }
      const timestamp = this.readToken().timestamp;
      return timestamp && (Date.now() - timestamp) < TOKEN_EXPIRATION;
  }

  public getCurrentUser(): string|null {
      if (this.isAuthenticated()) {
        return this.readToken().user;
      }
      return null;
  }

  public logout(): void {
    localStorage.removeItem('auth');
    this.router.navigateByUrl('/');
  }

  private readToken(): AuthToken {
      return JSON.parse(localStorage.getItem('auth')) as AuthToken;
  }
}
