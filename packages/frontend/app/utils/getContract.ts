import contractAddress from '../../../smart-contract/contract-address.json';

export const getContractAddress:any = (network: number | undefined) => {
  const _contractAddress = contractAddress as any;
  if (network) return _contractAddress[network];
  else
    return {
      address: '0x0000000000000000000000000000000000000000',
    };
};