import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'fb-app-shell',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app-shell.html',
})
export class AppShellComponent {}
