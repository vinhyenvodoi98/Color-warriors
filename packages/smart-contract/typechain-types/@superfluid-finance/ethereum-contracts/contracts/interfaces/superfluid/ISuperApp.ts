/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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

export interface ISuperAppInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "afterAgreementCreated"
      | "afterAgreementTerminated"
      | "afterAgreementUpdated"
      | "beforeAgreementCreated"
      | "beforeAgreementTerminated"
      | "beforeAgreementUpdated"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "afterAgreementCreated",
    values: [
      AddressLike,
      AddressLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "afterAgreementTerminated",
    values: [
      AddressLike,
      AddressLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "afterAgreementUpdated",
    values: [
      AddressLike,
      AddressLike,
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeAgreementCreated",
    values: [AddressLike, AddressLike, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeAgreementTerminated",
    values: [AddressLike, AddressLike, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeAgreementUpdated",
    values: [AddressLike, AddressLike, BytesLike, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "afterAgreementCreated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterAgreementTerminated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterAgreementUpdated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeAgreementCreated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeAgreementTerminated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeAgreementUpdated",
    data: BytesLike
  ): Result;
}

export interface ISuperApp extends BaseContract {
  connect(runner?: ContractRunner | null): ISuperApp;
  waitForDeployment(): Promise<this>;

  interface: ISuperAppInterface;

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

  afterAgreementCreated: TypedContractMethod<
    [
      superToken: AddressLike,
      agreementClass: AddressLike,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  afterAgreementTerminated: TypedContractMethod<
    [
      superToken: AddressLike,
      agreementClass: AddressLike,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  afterAgreementUpdated: TypedContractMethod<
    [
      superToken: AddressLike,
      agreementClass: AddressLike,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  beforeAgreementCreated: TypedContractMethod<
    [
      superToken: AddressLike,
      agreementClass: AddressLike,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike
    ],
    [string],
    "view"
  >;

  beforeAgreementTerminated: TypedContractMethod<
    [
      superToken: AddressLike,
      agreementClass: AddressLike,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike
    ],
    [string],
    "view"
  >;

  beforeAgreementUpdated: TypedContractMethod<
    [
      superToken: AddressLike,
      agreementClass: AddressLike,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike
    ],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "afterAgreementCreated"
  ): TypedContractMethod<
    [
      superToken: AddressLike,
      agreementClass: AddressLike,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "afterAgreementTerminated"
  ): TypedContractMethod<
    [
      superToken: AddressLike,
      agreementClass: AddressLike,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "afterAgreementUpdated"
  ): TypedContractMethod<
    [
      superToken: AddressLike,
      agreementClass: AddressLike,
      agreementId: BytesLike,
      agreementData: BytesLike,
      cbdata: BytesLike,
      ctx: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "beforeAgreementCreated"
  ): TypedContractMethod<
    [
      superToken: AddressLike,
      agreementClass: AddressLike,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "beforeAgreementTerminated"
  ): TypedContractMethod<
    [
      superToken: AddressLike,
      agreementClass: AddressLike,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "beforeAgreementUpdated"
  ): TypedContractMethod<
    [
      superToken: AddressLike,
      agreementClass: AddressLike,
      agreementId: BytesLike,
      agreementData: BytesLike,
      ctx: BytesLike
    ],
    [string],
    "view"
  >;

  filters: {};
}
