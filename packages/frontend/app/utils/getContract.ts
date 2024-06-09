import contractAddress from '../../../smart-contract/contract-address.json';
import contractAbi from '../../../smart-contract/artifacts-zk/contracts/BoardGame.sol/BoardGame.json'

export const getContractAddress:any = (network: number | undefined) => {
  const _contractAddress = contractAddress as any;
  if (network) return _contractAddress[network].address;
  else
    return '0x0000000000000000000000000000000000000000'
};

export const getContractAbi:any = () => {
  return contractAbi.abi;
}