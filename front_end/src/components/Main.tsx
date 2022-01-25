import {useEthers} from "@usedapp/core"
import helperConfig from "../helper-config..json"
import networkMappings from "../chain-info/deployments/map.json"
import {constants} from "ethers"
import brownieConfig from "../brownie-config.json"
import dapp from "../dapp.png"
import dai from "../dai.png"
import eth from "../eth.png"
import { YourWallet } from "./yourWallet"
import { makeStyles } from "@material-ui/core"

export type Token = {
    image: string
    address: string
    name: string
}

const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.common.white,
        textAlign: "center",
        padding: theme.spacing(4)
    }
}))

export const Main = () => {
    // Show token values from wallet
    // Get the address from different tokens
    // Get the balance of the users wallet

    // Send the brownie-config to the `src` folder
    // Send the build folder
    const classes = useStyles()
    const {chainId, error} = useEthers()
    const networkName = chainId ? helperConfig[chainId] : "development"

    const dappTokenAddress = chainId ? networkMappings[String(chainId)]["DappToken"][0] : constants.AddressZero
    const wethTokenAddress = chainId ? brownieConfig["networks"][networkName]["weth_token"] : constants.AddressZero
    const fauTokenAddress = chainId ? brownieConfig["networks"][networkName]["fau_token"] : constants.AddressZero

    const supportedTokens: Array<Token> = [
        {
            image: dapp,
            address: dappTokenAddress,
            name: "DAPP"
        },
        {
            image: dai,
            address: fauTokenAddress,
            name: "DAI"
        },
        {
            image: eth,
            address: wethTokenAddress,
            name: "WETH"
        }
    ]

    return (<>
        <h2 className={classes.title}>Dapp Token App</h2>
        <YourWallet supportedTokens={supportedTokens}/>
    </>)
}