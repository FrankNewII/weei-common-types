export * from './posts';
export * from './profile';
export * from './websocket-messages';
export * from './rtc-socket-messages';
export * from './messages';
export * from './comments';
export * from './likes';
export * from './updates';

export type Prepend<I, T extends unknown[]> = [I, ...T];
export type Append<I, T extends unknown[]> = [...T, I];
