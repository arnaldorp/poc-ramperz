import { Component } from '@angular/core';

import {
  getUser,
  init,
  AUTH_PROVIDER,
  CHAIN,
  THEME,
  WALLET_PROVIDER,
  SUPPORTED_ETHEREUM_NETWORKS
} from '@ramper/ethereum';
import { getWalletModel, User } from '@ramper/core';
import { ethers } from 'ethers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ngOnInit() {
    init({
      appName: 'EVM Test App',
      authProviders: [
        AUTH_PROVIDER.GOOGLE,
        AUTH_PROVIDER.FACEBOOK,
        AUTH_PROVIDER.TWITTER,
        AUTH_PROVIDER.APPLE,
        AUTH_PROVIDER.EMAIL
      ],
      walletProviders: [WALLET_PROVIDER.METAMASK],
      network: SUPPORTED_ETHEREUM_NETWORKS.MATICMUM,
      theme: THEME.DARK,
    })
  }

  login() {
    const user = getUser();
  }
}
