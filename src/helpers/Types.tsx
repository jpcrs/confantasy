type constellation = string;
type astrogalaxy = string;
type parallatic = string;
type Software = constellation | astrogalaxy | parallatic;

export type Config = { [key: Software]: string; };