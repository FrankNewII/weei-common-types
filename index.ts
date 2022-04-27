export * from './posts';
export * from './users';
export * from './websocket-messages';

export type Prepend<T, I> = [T, ...I];
export type Append<T, I> = [...I, T];