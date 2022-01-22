import pytest
from web3 import Web3
from brownie import MockERC20
from scripts.helpful_scripts import get_account


@pytest.fixture
def amount_staked():
    return Web3.toWei(1, "ether")


@pytest.fixture
def random_erc20():
    return MockERC20.deploy({"from": get_account()})