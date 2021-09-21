// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

interface IFantomOfferBundleMarketplace {

    function  deleteOffer(bytes32 bundleID, address offerer) external;

    function emitOfferCanceledEvent(address creator, string memory bundleID) external;

}