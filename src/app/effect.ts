import { EffectRef, WritableSignal, effect } from '@angular/core';

export const toggleEffect = (
	$switch: WritableSignal<boolean>,
	$label: WritableSignal<string>,
): EffectRef => {
	return effect(
		() =>
			((value): void => {
				console.log('signalValue', value);
				if (value) {
					$label.update(() => 'test');
				} else {
					$label.update(() => 'test2');
				}
			})($switch()),
		{ allowSignalWrites: true },
	);
};
