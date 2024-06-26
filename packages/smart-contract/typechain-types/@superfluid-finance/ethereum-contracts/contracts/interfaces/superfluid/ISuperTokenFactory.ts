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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../../common";

export interface ISuperTokenFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "computeCanonicalERC20WrapperAddress"
      | "createCanonicalERC20Wrapper"
      | "createERC20Wrapper(address,uint8,string,string)"
      | "createERC20Wrapper(address,uint8,string,string,address)"
      | "createERC20Wrapper(address,uint8,uint8,string,string)"
      | "createERC20Wrapper(address,uint8,uint8,string,string,address)"
      | "getCanonicalERC20Wrapper"
      | "getHost"
      | "getSuperTokenLogic"
      | "initialize"
      | "initializeCustomSuperToken"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CustomSuperTokenCreated"
      | "SuperTokenCreated"
      | "SuperTokenLogicCreated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "computeCanonicalERC20WrapperAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createCanonicalERC20Wrapper",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createERC20Wrapper(address,uint8,string,string)",
    values: [AddressLike, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createERC20Wrapper(address,uint8,string,string,address)",
    values: [AddressLike, BigNumberish, string, string, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createERC20Wrapper(address,uint8,uint8,string,string)",
    values: [AddressLike, BigNumberish, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createERC20Wrapper(address,uint8,uint8,string,string,address)",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      string,
      string,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getCanonicalERC20Wrapper",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "getHost", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getSuperTokenLogic",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializeCustomSuperToken",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "computeCanonicalERC20WrapperAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createCanonicalERC20Wrapper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createERC20Wrapper(address,uint8,string,string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createERC20Wrapper(address,uint8,string,string,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createERC20Wrapper(address,uint8,uint8,string,string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createERC20Wrapper(address,uint8,uint8,string,string,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCanonicalERC20Wrapper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getHost", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSuperTokenLogic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeCustomSuperToken",
    data: BytesLike
  ): Result;
}

export namespace CustomSuperTokenCreatedEvent {
  export type InputTuple = [token: AddressLike];
  export type OutputTuple = [token: string];
  export interface OutputObject {
    token: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SuperTokenCreatedEvent {
  export type InputTuple = [token: AddressLike];
  export type OutputTuple = [token: string];
  export interface OutputObject {
    token: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SuperTokenLogicCreatedEvent {
  export type InputTuple = [tokenLogic: AddressLike];
  export type OutputTuple = [tokenLogic: string];
  export interface OutputObject {
    tokenLogic: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ISuperTokenFactory extends BaseContract {
  connect(runner?: ContractRunner | null): ISuperTokenFactory;
  waitForDeployment(): Promise<this>;

  interface: ISuperTokenFactoryInterface;

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

  computeCanonicalERC20WrapperAddress: TypedContractMethod<
    [_underlyingToken: AddressLike],
    [[string, boolean] & { superTokenAddress: string; isDeployed: boolean }],
    "view"
  >;

  createCanonicalERC20Wrapper: TypedContractMethod<
    [_underlyingToken: AddressLike],
    [string],
    "nonpayable"
  >;

  "createERC20Wrapper(address,uint8,string,string)": TypedContractMethod<
    [
      underlyingToken: AddressLike,
      upgradability: BigNumberish,
      name: string,
      symbol: string
    ],
    [string],
    "nonpayable"
  >;

  "createERC20Wrapper(address,uint8,string,string,address)": TypedContractMethod<
    [
      underlyingToken: AddressLike,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      admin: AddressLike
    ],
    [string],
    "nonpayable"
  >;

  "createERC20Wrapper(address,uint8,uint8,string,string)": TypedContractMethod<
    [
      underlyingToken: AddressLike,
      underlyingDecimals: BigNumberish,
      upgradability: BigNumberish,
      name: string,
      symbol: string
    ],
    [string],
    "nonpayable"
  >;

  "createERC20Wrapper(address,uint8,uint8,string,string,address)": TypedContractMethod<
    [
      underlyingToken: AddressLike,
      underlyingDecimals: BigNumberish,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      admin: AddressLike
    ],
    [string],
    "nonpayable"
  >;

  getCanonicalERC20Wrapper: TypedContractMethod<
    [_underlyingTokenAddress: AddressLike],
    [string],
    "view"
  >;

  getHost: TypedContractMethod<[], [string], "view">;

  getSuperTokenLogic: TypedContractMethod<[], [string], "view">;

  initialize: TypedContractMethod<[], [void], "nonpayable">;

  initializeCustomSuperToken: TypedContractMethod<
    [customSuperTokenProxy: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "computeCanonicalERC20WrapperAddress"
  ): TypedContractMethod<
    [_underlyingToken: AddressLike],
    [[string, boolean] & { superTokenAddress: string; isDeployed: boolean }],
    "view"
  >;
  getFunction(
    nameOrSignature: "createCanonicalERC20Wrapper"
  ): TypedContractMethod<
    [_underlyingToken: AddressLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createERC20Wrapper(address,uint8,string,string)"
  ): TypedContractMethod<
    [
      underlyingToken: AddressLike,
      upgradability: BigNumberish,
      name: string,
      symbol: string
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createERC20Wrapper(address,uint8,string,string,address)"
  ): TypedContractMethod<
    [
      underlyingToken: AddressLike,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      admin: AddressLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createERC20Wrapper(address,uint8,uint8,string,string)"
  ): TypedContractMethod<
    [
      underlyingToken: AddressLike,
      underlyingDecimals: BigNumberish,
      upgradability: BigNumberish,
      name: string,
      symbol: string
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createERC20Wrapper(address,uint8,uint8,string,string,address)"
  ): TypedContractMethod<
    [
      underlyingToken: AddressLike,
      underlyingDecimals: BigNumberish,
      upgradability: BigNumberish,
      name: string,
      symbol: string,
      admin: AddressLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getCanonicalERC20Wrapper"
  ): TypedContractMethod<
    [_underlyingTokenAddress: AddressLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getHost"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getSuperTokenLogic"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "initializeCustomSuperToken"
  ): TypedContractMethod<
    [customSuperTokenProxy: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "CustomSuperTokenCreated"
  ): TypedContractEvent<
    CustomSuperTokenCreatedEvent.InputTuple,
    CustomSuperTokenCreatedEvent.OutputTuple,
    CustomSuperTokenCreatedEvent.OutputObject
  >;
  getEvent(
    key: "SuperTokenCreated"
  ): TypedContractEvent<
    SuperTokenCreatedEvent.InputTuple,
    SuperTokenCreatedEvent.OutputTuple,
    SuperTokenCreatedEvent.OutputObject
  >;
  getEvent(
    key: "SuperTokenLogicCreated"
  ): TypedContractEvent<
    SuperTokenLogicCreatedEvent.InputTuple,
    SuperTokenLogicCreatedEvent.OutputTuple,
    SuperTokenLogicCreatedEvent.OutputObject
  >;

  filters: {
    "CustomSuperTokenCreated(address)": TypedContractEvent<
      CustomSuperTokenCreatedEvent.InputTuple,
      CustomSuperTokenCreatedEvent.OutputTuple,
      CustomSuperTokenCreatedEvent.OutputObject
    >;
    CustomSuperTokenCreated: TypedContractEvent<
      CustomSuperTokenCreatedEvent.InputTuple,
      CustomSuperTokenCreatedEvent.OutputTuple,
      CustomSuperTokenCreatedEvent.OutputObject
    >;

    "SuperTokenCreated(address)": TypedContractEvent<
      SuperTokenCreatedEvent.InputTuple,
      SuperTokenCreatedEvent.OutputTuple,
      SuperTokenCreatedEvent.OutputObject
    >;
    SuperTokenCreated: TypedContractEvent<
      SuperTokenCreatedEvent.InputTuple,
      SuperTokenCreatedEvent.OutputTuple,
      SuperTokenCreatedEvent.OutputObject
    >;

    "SuperTokenLogicCreated(address)": TypedContractEvent<
      SuperTokenLogicCreatedEvent.InputTuple,
      SuperTokenLogicCreatedEvent.OutputTuple,
      SuperTokenLogicCreatedEvent.OutputObject
    >;
    SuperTokenLogicCreated: TypedContractEvent<
      SuperTokenLogicCreatedEvent.InputTuple,
      SuperTokenLogicCreatedEvent.OutputTuple,
      SuperTokenLogicCreatedEvent.OutputObject
    >;
  };
}
