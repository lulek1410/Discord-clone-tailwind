export interface SubChannel {
  text: string;
}

export interface IChannel {
  text: string;
  subChannels: SubChannel[];
}
