export * from './posts';
export * from './users';
export * from './websocket-messages';

type Prepend<I, T extends unknown[]> = [I, ...T];
type Append<I, T extends unknown[]> = [...T, I];