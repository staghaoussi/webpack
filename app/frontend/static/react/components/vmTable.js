
import React, { useEffect, useState } from 'react';

const VmTable = () => {
	const [vms, setVms] = useState([]);

	useEffect(() => {
		fetch('api/vms')
			.then(response => response.json())
			.then(d => {setVms(d)})
			.catch(err => {console.error('err fetching vms', err)});
	}, []);

	return (
        <table border="1" cellPadding="5" cellSpacing="0">
            <thead>
                <tr>
                    <th>Server Name</th>
                    <th>Name</th>
                    <th>CPUs</th>
                    <th>RAM (GB)</th>
                    <th>Active</th>
                    <th>SSH Key</th>
                </tr>
            </thead>
            <tbody>
                {vms.length > 0 ? (
                    vms.map(vm => (
                        <tr key={vm.id}>
                            <td>{vm.server ? vm.server.region : 'N/A'}</td>
                            <td>{vm.name}</td>
                            <td>{vm.cpus}</td>
                            <td>{vm.ram}</td>
                            <td>{vm.active ? 'Yes' : 'No'}</td>
                            <td>{vm.ssh_key ? 'Yes' : 'No'}</td>                    
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5">No VMs available</td>
                    </tr>
                )}
            </tbody>
        </table>
   )
}

export default VmTable;
