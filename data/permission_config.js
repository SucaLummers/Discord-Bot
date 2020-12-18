// user_ids     match any
// role_ids     match any
// guild_perms  match all


module.exports = {
    permissionLevels: [
        {
            name: "Owner",
            level: -1,
            user_ids:[],
            role_ids:[787777019600699452],
            guild_perms:[]
        },
        {
            name: "Administrator",
            level: 0,
            user_ids:[],
            role_ids:[787777748567457812],
            guild_perms:["ADMINISTRATOR"]
        },
        {
            name: "Moderator",
            level: 1,
            user_ids:[],
            role_ids:[787780616342601758],
            guild_perms:["MANAGE_MESSAGES"]
        },
        {
            name: "Member",
            level: 2,
            user_ids: [],
            role_ids: [787777971138199552],
            guild_perms: ["SEND_MESSAGES"]
        }
    ]
}