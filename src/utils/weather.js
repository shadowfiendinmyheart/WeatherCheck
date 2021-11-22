import { KELVIN_CONST } from '../constants/constants';

export function fromKelvinToCelsia(temp) {
    return Math.round(Number(temp) - KELVIN_CONST);
}

export function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getUTCHours();
    const minutes = ('0' + date.getUTCMinutes()).substr(-2);

    return `${hours}:${minutes}`
}