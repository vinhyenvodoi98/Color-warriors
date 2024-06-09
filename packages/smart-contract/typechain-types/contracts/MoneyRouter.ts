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
} from "../common";

export interface MoneyRouterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "accountList"
      | "allowAccount"
      | "changeOwner"
      | "createFlowFromContract"
      | "createFlowIntoContract"
      | "deleteFlowFromContract"
      | "deleteFlowIntoContract"
      | "owner"
      | "removeAccount"
      | "renounceOwnership"
      | "sendLumpSumToContract"
      | "transferOwnership"
      | "updateFlowFromContract"
      | "updateFlowIntoContract"
      | "withdrawFunds"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;

  encodeFunctionData(
    functionFragment: "accountList",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "allowAccount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "changeOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createFlowFromContract",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createFlowIntoContract",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteFlowFromContract",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteFlowIntoContract",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeAccount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendLumpSumToContract",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFlowFromContract",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFlowIntoContract",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFunds",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "accountList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createFlowFromContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createFlowIntoContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteFlowFromContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteFlowIntoContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendLumpSumToContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateFlowFromContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateFlowIntoContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFunds",
    data: BytesLike
  ): Result;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MoneyRouter extends BaseContract {
  connect(runner?: ContractRunner | null): MoneyRouter;
  waitForDeployment(): Promise<this>;

  interface: MoneyRouterInterface;

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

  accountList: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  allowAccount: TypedContractMethod<
    [_account: AddressLike],
    [void],
    "nonpayable"
  >;

  changeOwner: TypedContractMethod<
    [_newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  createFlowFromContract: TypedContractMethod<
    [token: AddressLike, receiver: AddressLike, flowRate: BigNumberish],
    [void],
    "nonpayable"
  >;

  createFlowIntoContract: TypedContractMethod<
    [token: AddressLike, flowRate: BigNumberish],
    [void],
    "nonpayable"
  >;

  deleteFlowFromContract: TypedContractMethod<
    [token: AddressLike, receiver: AddressLike],
    [void],
    "nonpayable"
  >;

  deleteFlowIntoContract: TypedContractMethod<
    [token: AddressLike],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  removeAccount: TypedContractMethod<
    [_account: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  sendLumpSumToContract: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  updateFlowFromContract: TypedContractMethod<
    [token: AddressLike, receiver: AddressLike, flowRate: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateFlowIntoContract: TypedContractMethod<
    [token: AddressLike, flowRate: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawFunds: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "accountList"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "allowAccount"
  ): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "changeOwner"
  ): TypedContractMethod<[_newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "createFlowFromContract"
  ): TypedContractMethod<
    [token: AddressLike, receiver: AddressLike, flowRate: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createFlowIntoContract"
  ): TypedContractMethod<
    [token: AddressLike, flowRate: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deleteFlowFromContract"
  ): TypedContractMethod<
    [token: AddressLike, receiver: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deleteFlowIntoContract"
  ): TypedContractMethod<[token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "removeAccount"
  ): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "sendLumpSumToContract"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateFlowFromContract"
  ): TypedContractMethod<
    [token: AddressLike, receiver: AddressLike, flowRate: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateFlowIntoContract"
  ): TypedContractMethod<
    [token: AddressLike, flowRate: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawFunds"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}
