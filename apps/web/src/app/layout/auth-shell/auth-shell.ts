import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'fb-auth-shell',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './auth-shell.html',
})
export class AuthShellComponent {}
