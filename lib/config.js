exports.config = {
  'MYSQL': false,
  'GLITCH': true,
  'DB': {
    'ACC': false,
    'SHOP': false,
    'DEV': true,
    'LB': false
  },
  'KEY_ISNEEDED':  false, //dont apply if Mysql or DB.ACC is on flase
  'S_BEFORE_KICK': 120,   // the nb of seconds before kicking someone afk on the death screen
  'MAX_IP':        2,     // max tabs someone can play on
  'DES':           10,
  'DEAD_DELAY':    150,   // the nb off ms before the person can replay
  'KEEP_PLACE':    20,
  'SIZE_GET_POS':  40,
}
