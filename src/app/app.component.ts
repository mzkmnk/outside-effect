import { Component, type WritableSignal, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { toggleEffect } from './effect';
import { PrimeNGConfig } from 'primeng/api';
import { Aura } from 'primeng/themes/aura';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, ButtonModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	private config = inject(PrimeNGConfig);
	$switch: WritableSignal<boolean> = signal<boolean>(false);

	$label = signal<string>('test2');

	constructor() {
		this.config.theme.set({ preset: Aura });
		toggleEffect(this.$switch, this.$label);
	}

	onClick = () => {
		this.$switch.update((v) => !v);
	};
}
