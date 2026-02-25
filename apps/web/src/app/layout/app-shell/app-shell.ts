import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'fb-app-shell',
  standalone: true,
  imports: [RouterOutlet, TuiButton],
  templateUrl: './app-shell.html',
})
export class AppShellComponent {}
