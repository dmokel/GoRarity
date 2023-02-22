import { normalizeContractString } from './utils/attribute-utils';

export class EVMContractTokenIdentifier {
  private _contractAddress: string;
  private _tokenId: number;
  // private _identifierType = 'evm_contract';

  constructor(contractAddress: string, tokenId: number) {
    this._contractAddress = normalizeContractString(contractAddress);
    this._tokenId = tokenId;
  }

  get tokenId() {
    return this._tokenId;
  }

  get contractAddress() {
    return this._contractAddress;
  }

  // get identifierType() {
  //   return this._identifierType;
  // }

  // identify() {
  //   return `Contract(${this._contractAddress}) #${this._tokenId}`;
  // }

  static fromDict(dict: { contractAddress: string; tokenId: number }) {
    return new EVMContractTokenIdentifier(dict.contractAddress, dict.tokenId);
  }

  toDict() {
    return {
      contractAddress: this._contractAddress,
      tokenId: this._tokenId,
    };
  }
}