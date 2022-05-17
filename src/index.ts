export * from './posts';
export * from './users';
export * from './websocket-messages';
export * from './rtc-socket-messages';

export type Prepend<I, T extends unknown[]> = [I, ...T];
export type Append<I, T extends unknown[]> = [...T, I];