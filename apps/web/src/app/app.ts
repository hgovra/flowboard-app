import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TuiRoot } from '@taiga-ui/core';
@Component({
  selector: 'fb-root',
  imports: [TuiRoot, RouterOutlet],
  templateUrl: './app.html',
})
export class App {}
