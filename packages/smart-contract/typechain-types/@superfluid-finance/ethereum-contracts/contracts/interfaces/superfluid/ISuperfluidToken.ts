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

export interface ISuperfluidTokenInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "createAgreement"
      | "getAccountActiveAgreements"
      | "getAgreementData"
      | "getAgreementStateSlot"
      | "getHost"
      | "isAccountCritical"
      | "isAccountCriticalNow"
      | "isAccountSolvent"
      | "isAccountSolventNow"
      | "makeLiquidationPayoutsV2"
      | "realtimeBalanceOf"
      | "realtimeBalanceOfNow"
      | "settleBalance"
      | "terminateAgreement"
      | "updateAgreementData"
      | "updateAgreementStateSlot"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AgreementCreated"
      | "AgreementLiquidated"
      | "AgreementLiquidatedBy"
      | "AgreementLiquidatedV2"
      | "AgreementStateUpdated"
      | "AgreementTerminated"
      | "AgreementUpdated"
      | "Bailout"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "createAgreement",
    values: [BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountActiveAgreements",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAgreementData",
    values: [AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAgreementStateSlot",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getHost", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isAccountCritical",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isAccountCriticalNow",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isAccountSolvent",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isAccountSolventNow",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "makeLiquidationPayoutsV2",
    values: [
      BytesLike,
      BytesLike,
      AddressLike,
      boolean,
      AddressLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "realtimeBalanceOf",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "realtimeBalanceOfNow",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "settleBalance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "terminateAgreement",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAgreementData",
    values: [BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAgreementStateSlot",
    values: [AddressLike, BigNumberish, BytesLike[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "createAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountActiveAgreements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAgreementData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAgreementStateSlot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getHost", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAccountCritical",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAccountCriticalNow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAccountSolvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAccountSolventNow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "makeLiquidationPayoutsV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "realtimeBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "realtimeBalanceOfNow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "terminateAgreement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAgreementData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAgreementStateSlot",
    data: BytesLike
  ): Result;
}

export namespace AgreementCreatedEvent {
  export type InputTuple = [
    agreementClass: AddressLike,
    id: BytesLike,
    data: BytesLike[]
  ];
  export type OutputTuple = [
    agreementClass: string,
    id: string,
    data: string[]
  ];
  export interface OutputObject {
    agreementClass: string;
    id: string;
    data: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AgreementLiquidatedEvent {
  export type InputTuple = [
    agreementClass: AddressLike,
    id: BytesLike,
    penaltyAccount: AddressLike,
    rewardAccount: AddressLike,
    rewardAmount: BigNumberish
  ];
  export type OutputTuple = [
    agreementClass: string,
    id: string,
    penaltyAccount: string,
    rewardAccount: string,
    rewardAmount: bigint
  ];
  export interface OutputObject {
    agreementClass: string;
    id: string;
    penaltyAccount: string;
    rewardAccount: string;
    rewardAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AgreementLiquidatedByEvent {
  export type InputTuple = [
    liquidatorAccount: AddressLike,
    agreementClass: AddressLike,
    id: BytesLike,
    penaltyAccount: AddressLike,
    bondAccount: AddressLike,
    rewardAmount: BigNumberish,
    bailoutAmount: BigNumberish
  ];
  export type OutputTuple = [
    liquidatorAccount: string,
    agreementClass: string,
    id: string,
    penaltyAccount: string,
    bondAccount: string,
    rewardAmount: bigint,
    bailoutAmount: bigint
  ];
  export interface OutputObject {
    liquidatorAccount: string;
    agreementClass: string;
    id: string;
    penaltyAccount: string;
    bondAccount: string;
    rewardAmount: bigint;
    bailoutAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AgreementLiquidatedV2Event {
  export type InputTuple = [
    agreementClass: AddressLike,
    id: BytesLike,
    liquidatorAccount: AddressLike,
    targetAccount: AddressLike,
    rewardAmountReceiver: AddressLike,
    rewardAmount: BigNumberish,
    targetAccountBalanceDelta: BigNumberish,
    liquidationTypeData: BytesLike
  ];
  export type OutputTuple = [
    agreementClass: string,
    id: string,
    liquidatorAccount: string,
    targetAccount: string,
    rewardAmountReceiver: string,
    rewardAmount: bigint,
    targetAccountBalanceDelta: bigint,
    liquidationTypeData: string
  ];
  export interface OutputObject {
    agreementClass: string;
    id: string;
    liquidatorAccount: string;
    targetAccount: string;
    rewardAmountReceiver: string;
    rewardAmount: bigint;
    targetAccountBalanceDelta: bigint;
    liquidationTypeData: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AgreementStateUpdatedEvent {
  export type InputTuple = [
    agreementClass: AddressLike,
    account: AddressLike,
    slotId: BigNumberish
  ];
  export type OutputTuple = [
    agreementClass: string,
    account: string,
    slotId: bigint
  ];
  export interface OutputObject {
    agreementClass: string;
    account: string;
    slotId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AgreementTerminatedEvent {
  export type InputTuple = [agreementClass: AddressLike, id: BytesLike];
  export type OutputTuple = [agreementClass: string, id: string];
  export interface OutputObject {
    agreementClass: string;
    id: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AgreementUpdatedEvent {
  export type InputTuple = [
    agreementClass: AddressLike,
    id: BytesLike,
    data: BytesLike[]
  ];
  export type OutputTuple = [
    agreementClass: string,
    id: string,
    data: string[]
  ];
  export interface OutputObject {
    agreementClass: string;
    id: string;
    data: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BailoutEvent {
  export type InputTuple = [
    bailoutAccount: AddressLike,
    bailoutAmount: BigNumberish
  ];
  export type OutputTuple = [bailoutAccount: string, bailoutAmount: bigint];
  export interface OutputObject {
    bailoutAccount: string;
    bailoutAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ISuperfluidToken extends BaseContract {
  connect(runner?: ContractRunner | null): ISuperfluidToken;
  waitForDeployment(): Promise<this>;

  interface: ISuperfluidTokenInterface;

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

  createAgreement: TypedContractMethod<
    [id: BytesLike, data: BytesLike[]],
    [void],
    "nonpayable"
  >;

  getAccountActiveAgreements: TypedContractMethod<
    [account: AddressLike],
    [string[]],
    "view"
  >;

  getAgreementData: TypedContractMethod<
    [agreementClass: AddressLike, id: BytesLike, dataLength: BigNumberish],
    [string[]],
    "view"
  >;

  getAgreementStateSlot: TypedContractMethod<
    [
      agreementClass: AddressLike,
      account: AddressLike,
      slotId: BigNumberish,
      dataLength: BigNumberish
    ],
    [string[]],
    "view"
  >;

  getHost: TypedContractMethod<[], [string], "view">;

  isAccountCritical: TypedContractMethod<
    [account: AddressLike, timestamp: BigNumberish],
    [boolean],
    "view"
  >;

  isAccountCriticalNow: TypedContractMethod<
    [account: AddressLike],
    [boolean],
    "view"
  >;

  isAccountSolvent: TypedContractMethod<
    [account: AddressLike, timestamp: BigNumberish],
    [boolean],
    "view"
  >;

  isAccountSolventNow: TypedContractMethod<
    [account: AddressLike],
    [boolean],
    "view"
  >;

  makeLiquidationPayoutsV2: TypedContractMethod<
    [
      id: BytesLike,
      liquidationTypeData: BytesLike,
      liquidatorAccount: AddressLike,
      useDefaultRewardAccount: boolean,
      targetAccount: AddressLike,
      rewardAmount: BigNumberish,
      targetAccountBalanceDelta: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  realtimeBalanceOf: TypedContractMethod<
    [account: AddressLike, timestamp: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        availableBalance: bigint;
        deposit: bigint;
        owedDeposit: bigint;
      }
    ],
    "view"
  >;

  realtimeBalanceOfNow: TypedContractMethod<
    [account: AddressLike],
    [
      [bigint, bigint, bigint, bigint] & {
        availableBalance: bigint;
        deposit: bigint;
        owedDeposit: bigint;
        timestamp: bigint;
      }
    ],
    "view"
  >;

  settleBalance: TypedContractMethod<
    [account: AddressLike, delta: BigNumberish],
    [void],
    "nonpayable"
  >;

  terminateAgreement: TypedContractMethod<
    [id: BytesLike, dataLength: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateAgreementData: TypedContractMethod<
    [id: BytesLike, data: BytesLike[]],
    [void],
    "nonpayable"
  >;

  updateAgreementStateSlot: TypedContractMethod<
    [account: AddressLike, slotId: BigNumberish, slotData: BytesLike[]],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createAgreement"
  ): TypedContractMethod<
    [id: BytesLike, data: BytesLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAccountActiveAgreements"
  ): TypedContractMethod<[account: AddressLike], [string[]], "view">;
  getFunction(
    nameOrSignature: "getAgreementData"
  ): TypedContractMethod<
    [agreementClass: AddressLike, id: BytesLike, dataLength: BigNumberish],
    [string[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAgreementStateSlot"
  ): TypedContractMethod<
    [
      agreementClass: AddressLike,
      account: AddressLike,
      slotId: BigNumberish,
      dataLength: BigNumberish
    ],
    [string[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getHost"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "isAccountCritical"
  ): TypedContractMethod<
    [account: AddressLike, timestamp: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isAccountCriticalNow"
  ): TypedContractMethod<[account: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isAccountSolvent"
  ): TypedContractMethod<
    [account: AddressLike, timestamp: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isAccountSolventNow"
  ): TypedContractMethod<[account: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "makeLiquidationPayoutsV2"
  ): TypedContractMethod<
    [
      id: BytesLike,
      liquidationTypeData: BytesLike,
      liquidatorAccount: AddressLike,
      useDefaultRewardAccount: boolean,
      targetAccount: AddressLike,
      rewardAmount: BigNumberish,
      targetAccountBalanceDelta: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "realtimeBalanceOf"
  ): TypedContractMethod<
    [account: AddressLike, timestamp: BigNumberish],
    [
      [bigint, bigint, bigint] & {
        availableBalance: bigint;
        deposit: bigint;
        owedDeposit: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "realtimeBalanceOfNow"
  ): TypedContractMethod<
    [account: AddressLike],
    [
      [bigint, bigint, bigint, bigint] & {
        availableBalance: bigint;
        deposit: bigint;
        owedDeposit: bigint;
        timestamp: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "settleBalance"
  ): TypedContractMethod<
    [account: AddressLike, delta: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "terminateAgreement"
  ): TypedContractMethod<
    [id: BytesLike, dataLength: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateAgreementData"
  ): TypedContractMethod<
    [id: BytesLike, data: BytesLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateAgreementStateSlot"
  ): TypedContractMethod<
    [account: AddressLike, slotId: BigNumberish, slotData: BytesLike[]],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "AgreementCreated"
  ): TypedContractEvent<
    AgreementCreatedEvent.InputTuple,
    AgreementCreatedEvent.OutputTuple,
    AgreementCreatedEvent.OutputObject
  >;
  getEvent(
    key: "AgreementLiquidated"
  ): TypedContractEvent<
    AgreementLiquidatedEvent.InputTuple,
    AgreementLiquidatedEvent.OutputTuple,
    AgreementLiquidatedEvent.OutputObject
  >;
  getEvent(
    key: "AgreementLiquidatedBy"
  ): TypedContractEvent<
    AgreementLiquidatedByEvent.InputTuple,
    AgreementLiquidatedByEvent.OutputTuple,
    AgreementLiquidatedByEvent.OutputObject
  >;
  getEvent(
    key: "AgreementLiquidatedV2"
  ): TypedContractEvent<
    AgreementLiquidatedV2Event.InputTuple,
    AgreementLiquidatedV2Event.OutputTuple,
    AgreementLiquidatedV2Event.OutputObject
  >;
  getEvent(
    key: "AgreementStateUpdated"
  ): TypedContractEvent<
    AgreementStateUpdatedEvent.InputTuple,
    AgreementStateUpdatedEvent.OutputTuple,
    AgreementStateUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "AgreementTerminated"
  ): TypedContractEvent<
    AgreementTerminatedEvent.InputTuple,
    AgreementTerminatedEvent.OutputTuple,
    AgreementTerminatedEvent.OutputObject
  >;
  getEvent(
    key: "AgreementUpdated"
  ): TypedContractEvent<
    AgreementUpdatedEvent.InputTuple,
    AgreementUpdatedEvent.OutputTuple,
    AgreementUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Bailout"
  ): TypedContractEvent<
    BailoutEvent.InputTuple,
    BailoutEvent.OutputTuple,
    BailoutEvent.OutputObject
  >;

  filters: {
    "AgreementCreated(address,bytes32,bytes32[])": TypedContractEvent<
      AgreementCreatedEvent.InputTuple,
      AgreementCreatedEvent.OutputTuple,
      AgreementCreatedEvent.OutputObject
    >;
    AgreementCreated: TypedContractEvent<
      AgreementCreatedEvent.InputTuple,
      AgreementCreatedEvent.OutputTuple,
      AgreementCreatedEvent.OutputObject
    >;

    "AgreementLiquidated(address,bytes32,address,address,uint256)": TypedContractEvent<
      AgreementLiquidatedEvent.InputTuple,
      AgreementLiquidatedEvent.OutputTuple,
      AgreementLiquidatedEvent.OutputObject
    >;
    AgreementLiquidated: TypedContractEvent<
      AgreementLiquidatedEvent.InputTuple,
      AgreementLiquidatedEvent.OutputTuple,
      AgreementLiquidatedEvent.OutputObject
    >;

    "AgreementLiquidatedBy(address,address,bytes32,address,address,uint256,uint256)": TypedContractEvent<
      AgreementLiquidatedByEvent.InputTuple,
      AgreementLiquidatedByEvent.OutputTuple,
      AgreementLiquidatedByEvent.OutputObject
    >;
    AgreementLiquidatedBy: TypedContractEvent<
      AgreementLiquidatedByEvent.InputTuple,
      AgreementLiquidatedByEvent.OutputTuple,
      AgreementLiquidatedByEvent.OutputObject
    >;

    "AgreementLiquidatedV2(address,bytes32,address,address,address,uint256,int256,bytes)": TypedContractEvent<
      AgreementLiquidatedV2Event.InputTuple,
      AgreementLiquidatedV2Event.OutputTuple,
      AgreementLiquidatedV2Event.OutputObject
    >;
    AgreementLiquidatedV2: TypedContractEvent<
      AgreementLiquidatedV2Event.InputTuple,
      AgreementLiquidatedV2Event.OutputTuple,
      AgreementLiquidatedV2Event.OutputObject
    >;

    "AgreementStateUpdated(address,address,uint256)": TypedContractEvent<
      AgreementStateUpdatedEvent.InputTuple,
      AgreementStateUpdatedEvent.OutputTuple,
      AgreementStateUpdatedEvent.OutputObject
    >;
    AgreementStateUpdated: TypedContractEvent<
      AgreementStateUpdatedEvent.InputTuple,
      AgreementStateUpdatedEvent.OutputTuple,
      AgreementStateUpdatedEvent.OutputObject
    >;

    "AgreementTerminated(address,bytes32)": TypedContractEvent<
      AgreementTerminatedEvent.InputTuple,
      AgreementTerminatedEvent.OutputTuple,
      AgreementTerminatedEvent.OutputObject
    >;
    AgreementTerminated: TypedContractEvent<
      AgreementTerminatedEvent.InputTuple,
      AgreementTerminatedEvent.OutputTuple,
      AgreementTerminatedEvent.OutputObject
    >;

    "AgreementUpdated(address,bytes32,bytes32[])": TypedContractEvent<
      AgreementUpdatedEvent.InputTuple,
      AgreementUpdatedEvent.OutputTuple,
      AgreementUpdatedEvent.OutputObject
    >;
    AgreementUpdated: TypedContractEvent<
      AgreementUpdatedEvent.InputTuple,
      AgreementUpdatedEvent.OutputTuple,
      AgreementUpdatedEvent.OutputObject
    >;

    "Bailout(address,uint256)": TypedContractEvent<
      BailoutEvent.InputTuple,
      BailoutEvent.OutputTuple,
      BailoutEvent.OutputObject
    >;
    Bailout: TypedContractEvent<
      BailoutEvent.InputTuple,
      BailoutEvent.OutputTuple,
      BailoutEvent.OutputObject
    >;
  };
}