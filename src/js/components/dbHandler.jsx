/* global chrome */
import React, { useState } from 'react';

export default (data) => {
  chrome.storage.sync.get({ itemUrls: [] }, (result) => {
    const { itemUrls } = result;
    itemUrls.push(data);
    chrome.storage.sync.set({ itemUrls });
  });
};
