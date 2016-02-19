export default{
    // App base url
    app_base_url: 'http://www.reddit.api',
    // Reddit Auth Base url
    auth_base_url: 'https://www.reddit.com/api/v1/authorize?',
    // Application client ID
    client_id: 'A3OPpcV9LmO7hg',
    // Alpha-Numberic list for use as state
    take_a_few: 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789-_',
    // Aplha-Numberic list not used
    not_used: 'IiOoLl10',
    // Where the user will be redirected after calling the auth API
    redirect_url: 'http://www.reddit.api/gateway',
    // Duration for which the user will be auth'd
    duration: 'permanent',
    // What we will need from the API
    scope: 'identity,flair',
    // What we will tell the user when they have deny the API request
    code_error_text: 'You denied the Reddit API request. If this was a mistake please try again.',
    // What we will tell the user when there states sent and recieved don't match
    state_error_text: 'The Reddit API sent an incorrect state value. Something fishy is happening!',

    // Object which contains the front list items and some info about them
    front_list_items: [
        {
            id: '1',
            name: 'Hot',
            list_type: 'Hot'
        },
        {
            id: '2',
            name: 'New',
            list_type: 'New'
        },
        {
            id: '3',
            name: 'Rising',
            list_type: 'Rising'
        },
        {
            id: '4',
            name: 'Controversial',
            list_type: 'Controversial',
            time_filter: [
                {
                    id: '1',
                    name: 'Past Hour',
                    filter: 'hour'
                },
                {
                    id: '2',
                    name: 'Past 24 Hours',
                    filter: 'day'
                },
                {
                    id: '3',
                    name: 'Past Week',
                    filter: 'week'
                },
                {
                    id: '4',
                    name: 'Past Year',
                    filter: 'year'
                },
                {
                    id: '5',
                    name: 'All Time',
                    filter: 'all'
                }
            ]
        },
        {
            id: '5',
            name: 'Top',
            list_type: 'Top',
            time_filter: [
                {
                    id: '1',
                    name: 'Past Hour',
                    filter: 'hour'
                },
                {
                    id: '2',
                    name: 'Past 24 Hours',
                    filter: 'day'
                },
                {
                    id: '3',
                    name: 'Past Week',
                    filter: 'week'
                },
                {
                    id: '4',
                    name: 'Past Year',
                    filter: 'year'
                },
                {
                    id: '5',
                    name: 'All Time',
                    filter: 'all'
                }
            ]
        },
        {
            id: '6',
            name: 'Guilded',
            list_type: 'Guilded'
        }
    ]
}
