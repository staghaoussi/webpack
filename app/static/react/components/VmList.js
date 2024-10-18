
import React, { useEffect, useMemo, useState } from 'react';
import VmTable from './vmTable';

const VmList = () => {

	return (
		<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
			<VmTable/>
		</div>
   )
}

export default VmList;
