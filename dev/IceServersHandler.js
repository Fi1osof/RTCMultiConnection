// IceServersHandler.js

var IceServersHandler = (function() {
    function getIceServers(connection) {
        // resiprocate: 3344+4433
        // pions: 7575
        // var iceServers = [{
        //         'urls': [
        //             'stun:webrtcweb.com:7788'
        //         ],
        //         'username': 'test',
        //         'credential': 'test'
        //     },
        //     {
        //         'urls': [
        //             'turn:webrtcweb.com:7788', // coTURN 7788+8877
        //             'turn:webrtcweb.com:8877',
        //             'turn:webrtcweb.com:4455', // restund udp
        //         ],
        //         'username': 'muazkh',
        //         'credential': 'muazkh'
        //     },
        //     {
        //         'urls': [
        //             'stun:stun.l.google.com:19302',
        //             'stun:stun1.l.google.com:19302',
        //             'stun:stun2.l.google.com:19302',
        //             'stun:stun.l.google.com:19302?transport=udp',
        //         ]
        //     }
        // ];

        var iceServers = [{
                'urls': [
                    'stun:142.93.239.100:3478'
                ],
                'username': 'test',
                'credential': 'test'
            },
            {
                'urls': [
                    'turn:142.93.239.100:3478'
                ],
                'username': 'test',
                'credential': 'test'
            },
        ];

        return iceServers;
    }

    return {
        getIceServers: getIceServers
    };
})();
