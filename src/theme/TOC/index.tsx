import OriginalTOC from '@theme-original/TOC';
import EditThisPage from '@theme/EditThisPage';
import React, { useEffect, useState } from 'react';

export default function TOC({ toc, editUrl, ...props }) {

  return (
    <div className="toc-wrapper">
      <h2>Contents</h2>
      <OriginalTOC toc={toc} {...props} />
      <EditThisPage editUrl={editUrl} />
    </div>
  );
}
