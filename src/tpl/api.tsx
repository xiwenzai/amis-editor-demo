import {
    setSchemaTpl,
} from 'amis-editor-core';
import {Html} from 'amis';
import React from 'react';
setSchemaTpl('apiControl', (patch: any = {}) => {
    const {name, label, value, description, sampleBuilder, apiDesc, ...rest} =
        patch;
    console.log("进入我的方法了")
    return {
        type: 'murphy-apiControl',
        label,
        name: name || 'api',
        description,
        labelRemark: sampleBuilder
            ? {
                label: false,
                title: '接口返回示例111',
                icon: 'fas fa-code',
                className: 'm-l-xs ae-ApiSample-icon',
                tooltipClassName: 'ae-ApiSample-tooltip',
                children: (data: any) => (
                    <Html
                        className="ae-ApiSample"
                        inline={false}
                        html={`
                  <pre><code>${sampleBuilder(data)}</code></pre>
                  `}
                    />
                ),
                trigger: 'click',
                rootClose: true,
                placement: 'left'
            }
            : undefined,
        ...rest
    };
});