export * from './posts';
export * from './users';
export * from './websocket-messages';

export type Prepend<I, T extends unknown[]> = [I, ...T];
export type Append<I, T extends unknown[]> = [...T, I];