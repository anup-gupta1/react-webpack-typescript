import Input from '../../components/Input';
import React, { ChangeEvent, useState } from 'react';

const Setting = () => {
    const [username, setUserName] = useState<string|undefined>();
    return (
        <div>
            <Input
                onChange={(e) => setUserName(e?.target?.value)}
                value={username}
                label="Username"
                placeholder="Enter User Name"
            />
        </div>
    )
}

export default Setting;
