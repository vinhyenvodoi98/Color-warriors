/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../../common";

export interface ISuperfluidGovernanceInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "batchUpdateSuperTokenLogic(address,address[])"
      | "batchUpdateSuperTokenLogic(address,address[],address[])"
      | "clearConfig"
      | "getConfigAsAddress"
      | "getConfigAsUint256"
      | "registerAgreementClass"
      | "replaceGovernance"
      | "setConfig(address,address,bytes32,address)"
      | "setConfig(address,address,bytes32,uint256)"
      | "updateContracts"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "batchUpdateSuperTokenLogic(address,address[])",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchUpdateSuperTokenLogic(address,address[],address[])",
    values: [AddressLike, AddressLike[], AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "clearConfig",
    values: [AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getConfigAsAddress",
    values: [AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getConfigAsUint256",
    values: [AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerAgreementClass",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "replaceGovernance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfig(address,address,bytes32,address)",
    values: [AddressLike, AddressLike, BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfig(address,address,bytes32,uint256)",
    values: [AddressLike, AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateContracts",
    values: [AddressLike, AddressLike, AddressLike[], AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchUpdateSuperTokenLogic(address,address[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchUpdateSuperTokenLogic(address,address[],address[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "clearConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getConfigAsAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getConfigAsUint256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerAgreementClass",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "replaceGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setConfig(address,address,bytes32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setConfig(address,address,bytes32,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateContracts",
    data: BytesLike
  ): Result;
}

export interface ISuperfluidGovernance extends BaseContract {
  connect(runner?: ContractRunner | null): ISuperfluidGovernance;
  waitForDeployment(): Promise<this>;

  interface: ISuperfluidGovernanceInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  "batchUpdateSuperTokenLogic(address,address[])": TypedContractMethod<
    [host: AddressLike, tokens: AddressLike[]],
    [void],
    "nonpayable"
  >;

  "batchUpdateSuperTokenLogic(address,address[],address[])": TypedContractMethod<
    [host: AddressLike, tokens: AddressLike[], tokenLogics: AddressLike[]],
    [void],
    "nonpayable"
  >;

  clearConfig: TypedContractMethod<
    [host: AddressLike, superToken: AddressLike, key: BytesLike],
    [void],
    "nonpayable"
  >;

  getConfigAsAddress: TypedContractMethod<
    [host: AddressLike, superToken: AddressLike, key: BytesLike],
    [string],
    "view"
  >;

  getConfigAsUint256: TypedContractMethod<
    [host: AddressLike, superToken: AddressLike, key: BytesLike],
    [bigint],
    "view"
  >;

  registerAgreementClass: TypedContractMethod<
    [host: AddressLike, agreementClass: AddressLike],
    [void],
    "nonpayable"
  >;

  replaceGovernance: TypedContractMethod<
    [host: AddressLike, newGov: AddressLike],
    [void],
    "nonpayable"
  >;

  "setConfig(address,address,bytes32,address)": TypedContractMethod<
    [
      host: AddressLike,
      superToken: AddressLike,
      key: BytesLike,
      value: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  "setConfig(address,address,bytes32,uint256)": TypedContractMethod<
    [
      host: AddressLike,
      superToken: AddressLike,
      key: BytesLike,
      value: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  updateContracts: TypedContractMethod<
    [
      host: AddressLike,
      hostNewLogic: AddressLike,
      agreementClassNewLogics: AddressLike[],
      superTokenFactoryNewLogic: AddressLike,
      beaconNewLogic: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "batchUpdateSuperTokenLogic(address,address[])"
  ): TypedContractMethod<
    [host: AddressLike, tokens: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "batchUpdateSuperTokenLogic(address,address[],address[])"
  ): TypedContractMethod<
    [host: AddressLike, tokens: AddressLike[], tokenLogics: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "clearConfig"
  ): TypedContractMethod<
    [host: AddressLike, superToken: AddressLike, key: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getConfigAsAddress"
  ): TypedContractMethod<
    [host: AddressLike, superToken: AddressLike, key: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getConfigAsUint256"
  ): TypedContractMethod<
    [host: AddressLike, superToken: AddressLike, key: BytesLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "registerAgreementClass"
  ): TypedContractMethod<
    [host: AddressLike, agreementClass: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "replaceGovernance"
  ): TypedContractMethod<
    [host: AddressLike, newGov: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setConfig(address,address,bytes32,address)"
  ): TypedContractMethod<
    [
      host: AddressLike,
      superToken: AddressLike,
      key: BytesLike,
      value: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setConfig(address,address,bytes32,uint256)"
  ): TypedContractMethod<
    [
      host: AddressLike,
      superToken: AddressLike,
      key: BytesLike,
      value: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateContracts"
  ): TypedContractMethod<
    [
      host: AddressLike,
      hostNewLogic: AddressLike,
      agreementClassNewLogics: AddressLike[],
      superTokenFactoryNewLogic: AddressLike,
      beaconNewLogic: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  filters: {};
}
