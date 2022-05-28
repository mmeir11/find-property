const transactions = {
  properties: [
    {
      address: "\u05ea\u05de\u05d9\u05e8 \u05e9\u05de\u05d5\u05d0\u05dc 53, \u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd",
      price: 2400000,
      sqm: 148.0,
      num_rooms: 5.0,
      floor: 1.0,
      num_floors: 1.0,
      elevator: 0,
      parking: "single",
      id: "c8735a32a24c454a9c6fa868f96d6977"
    },
    {
      address: "\u05e7\u05d5\u05d1\u05d5\u05d1\u05d9 21, \u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd",
      price: 2000000,
      sqm: 84.0,
      num_rooms: 4.0,
      floor: 1.0,
      num_floors: 7.0,
      elevator: 0,
      parking: "without",
      id: "3d025434826946918e7184e2bf18d869"
    },
    {
      address: "\u05d4\u05e8\u05d1 \u05e9\u05d0\u05d5\u05dc\u05d6\u05d5\u05df 66, \u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd",
      price: 2099000,
      sqm: 96.0,
      num_rooms: 4.0,
      floor: 7.0,
      num_floors: 9.0,
      elevator: 1,
      parking: "single",
      id: "798528a2677f4b4dbd43d451cab3e3e1"
    },
    {
      address: NaN,
      price: 1425000,
      sqm: 139.0,
      num_rooms: 5.0,
      floor: 4.0,
      num_floors: 6.0,
      elevator: 1,
      parking: "without",
      id: "5217eb136e084209bb9b01cbdb61b317"
    },
    {
      address: "\u05d9\u05d3 \u05dc\u05d1\u05e0\u05d9\u05dd 79, \u05d7\u05d9\u05e4\u05d4",
      price: 650000,
      sqm: 62.0,
      num_rooms: 3.0,
      floor: 5.0,
      num_floors: 5.0,
      elevator: 0,
      parking: "double",
      id: "b1cd7af47cd84188a6d2cc381336a222"
    },
    {
      address: "\u05d0\u05e8\u05d1\u05dc 12, \u05db\u05e8\u05de\u05d9\u05d0\u05dc",
      price: "635000",
      sqm: 73.0,
      num_rooms: 3.5,
      floor: 3.0,
      num_floors: 8.0,
      elevator: 1,
      parking: "without",
      id: "63bfd34f6e0e422589aad501bbff7313"
    },
    {
      address: "\u05d1\u05d9\u05ea \u05d0\u05dc 41, \u05ea\u05dc \u05d0\u05d1\u05d9\u05d1 -\u05d9\u05e4\u05d5",
      price: 1902411,
      sqm: 98.0,
      num_rooms: 4.0,
      floor: 1.0,
      num_floors: 3.0,
      elevator: 0,
      parking: "double",
      id: "2e36e34302d24b65bd05c021e26ec8f8"
    },
    {
      address: "\u05d5\u05d9\u05e6\u05de\u05df 169, \u05db\u05e4\u05e8 \u05e1\u05d1\u05d0",
      price: 1570000,
      sqm: 99.0,
      num_rooms: 4.5,
      floor: 1.0,
      num_floors: 5.0,
      elevator: 1,
      parking: "without",
      id: "974b43f7c6d0472f95245a46f89ac0dc"
    },
    {
      address: "\u05d0\u05d5\u05e8\u05dc\u05d5\u05d1 \u05d6\u05d0\u05d1 40, \u05e4\u05ea\u05d7 \u05ea\u05e7\u05d5\u05d5\u05d4",
      price: 1500000,
      sqm: 90.0,
      num_rooms: 4.0,
      floor: 1.0,
      num_floors: 5.0,
      elevator: 1,
      parking: "without",
      id: "522a8c05948c4d3dbbb295437877c642"
    },
    {
      address: "\u05de\u05e8\u05db\u05d5\u05e1 \u05de\u05e9\u05d4 3, \u05e4\u05ea\u05d7 \u05ea\u05e7\u05d5\u05d5\u05d4",
      price: 1190000,
      sqm: 57.0,
      num_rooms: 3.0,
      floor: 4.0,
      num_floors: 4.0,
      elevator: 0,
      parking: "without",
      id: "6520cd474586496bbf04fca45e9111c0"
    },
    {
      address: "\u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd 16, \u05d8\u05d9\u05e8\u05ea \u05db\u05e8\u05de\u05dc",
      price: 165000,
      sqm: 48.0,
      num_rooms: 3.0,
      floor: 1.0,
      num_floors: 4.0,
      elevator: 0,
      parking: "without",
      id: "63babe9139674c518954dd663ce4e439"
    },
    {
      address: "\u05e2\u05d9\u05df \u05d9\u05d4\u05d1 5, \u05d7\u05d5\u05dc\u05d5\u05df",
      price: 1110000,
      sqm: 50.0,
      num_rooms: 3.0,
      floor: 4.0,
      num_floors: 5.0,
      elevator: 0,
      parking: "without",
      id: "c588c300fdaf4b94a3de0aae76247681"
    },
    {
      address: "\u05d4\u05e7\u05d5\u05e0\u05d2\u05e8\u05e1 7, \u05e4\u05ea\u05d7 \u05ea\u05e7\u05d5\u05d5\u05d4",
      price: 779000,
      sqm: 105.0,
      num_rooms: 4.0,
      floor: 5.0,
      num_floors: 5.0,
      elevator: 1,
      parking: "without",
      id: "b87892b91e544baea25123e75daf6fea"
    },
    {
      address: "\u05d5\u05d9\u05e6\u05de\u05df 15, \u05d1\u05ea \u05d9\u05dd",
      price: 291000,
      sqm: 55.0,
      num_rooms: 3.0,
      floor: 2.0,
      num_floors: 2.0,
      elevator: 0,
      parking: "single",
      id: "8f51ca22b5f04a3b9496bc4ab216d066"
    },
    {
      address: "\u05de\u05d9\u05db\u05e9\u05d5\u05d9\u05dc\u05d9 26, \u05d0\u05e9\u05d3\u05d5\u05d3",
      price: 818000,
      sqm: 58.0,
      num_rooms: "3.5",
      floor: 2.0,
      num_floors: 4.0,
      elevator: 0,
      parking: "double",
      id: "87dc665b73e44360864b427be76bf6c3"
    },
    {
      address: "\u05d1\u05e8 \u05db\u05d5\u05db\u05d1\u05d0 51, \u05ea\u05dc \u05d0\u05d1\u05d9\u05d1 -\u05d9\u05e4\u05d5",
      price: 1880000,
      sqm: 110.0,
      num_rooms: 4.0,
      floor: -1.0,
      num_floors: 3.0,
      elevator: 0,
      parking: "without",
      id: "bd491a2478454ce9b1ba87dd552dbb13"
    },
    {
      address: "\u05d0\u05e7\u05e1\u05d5\u05d3\u05d5\u05e1 9, \u05d0\u05e9\u05d3\u05d5\u05d3",
      price: 2640000,
      sqm: 128.0,
      num_rooms: 4.0,
      floor: 2.0,
      num_floors: 3.0,
      elevator: 0,
      parking: "without",
      id: "4fb25793815a4a56a5a10d4690897489"
    },
    {
      address: "\u05e8\u05d5\u05d1\u05d9\u05e0\u05d0 \u05d7\u05e0\u05d4 1, \u05d1\u05d0\u05e8 \u05e9\u05d1\u05e2",
      price: 830000,
      sqm: 100.0,
      num_rooms: 4.0,
      floor: 0.0,
      num_floors: 0.0,
      elevator: 0,
      parking: "double",
      id: "8544215a6372475f8fc98fc25efc8f25"
    },
    {
      address: NaN,
      price: 1362000.0,
      sqm: "127.0",
      num_rooms: 5.0,
      floor: 9.0,
      num_floors: 14.0,
      elevator: 1,
      parking: "without",
      id: "cd12cc3880e04de6a4ed679486231ba6"
    },
    {
      address: "\u05d6\'\u05d1\u05d5\u05d8\u05d9\u05e0\u05e1\u05e7\u05d9 10, \u05e7\u05e8\u05d9\u05d9\u05ea \u05de\u05dc\u05d0\u05db\u05d9",
      price: 760000,
      sqm: 87.0,
      num_rooms: 4.0,
      floor: 3.0,
      num_floors: 3.0,
      elevator: 0,
      parking: "without",
      id: "7265514b37e44ac0964129cb15677056"
    },
    {
      address: "\u05d4\u05e1\u05d7\u05dc\u05d1 6, \u05e8\u05d0\u05e9\u05d5\u05df \u05dc\u05e6\u05d9\u05d5\u05df",
      price: 1490000,
      sqm: 97.0,
      num_rooms: 4.0,
      floor: 9.0,
      num_floors: 17.0,
      elevator: 1,
      parking: "single",
      id: "a42937c7d064473cb765ce7af01c4578"
    },
    {
      address: "\u05d4\u05d7\u05dc\u05de\u05d5\u05e0\u05d9\u05ea 9, \u05e8\u05d0\u05e9\u05d5\u05df \u05dc\u05e6\u05d9\u05d5\u05df",
      price: 898000,
      sqm: 103.0,
      num_rooms: 4.0,
      floor: 5.0,
      num_floors: 6.0,
      elevator: 1,
      parking: "single",
      id: "ef8cafd4bfc94e25a9f14a3b028414ac"
    },
    {
      address: "\u05d5\u05d5\u05dc\u05e1\u05e7\u05d9\u05d6 1, \u05e7\u05e8\u05d9\u05d9\u05ea \u05d0\u05ea\u05d0",
      price: 1725000,
      sqm: 121,
      num_rooms: 5.0,
      floor: 1.0,
      num_floors: 3.0,
      elevator: 0,
      parking: "single",
      id: "c05584997f2b4cc8911a1ca2b52479a0"
    },
    {
      address: "\u05d2\u05e0\u05d9\u05d7\u05d5\u05d1\u05e1\u05e7\u05d9 21, \u05d1\u05e0\u05d9 \u05d1\u05e8\u05e7",
      price: 1495000,
      sqm: 58.0,
      num_rooms: 3.0,
      floor: 2.0,
      num_floors: 4.0,
      elevator: 0,
      parking: "without",
      id: "2064d9d3a67a45eba49a32eeed95999e"
    },
    {
      address: NaN,
      price: 1209000,
      sqm: 99.0,
      num_rooms: 4.0,
      floor: 11.0,
      num_floors: 17.0,
      elevator: "1",
      parking: "double",
      id: "e8c89d7b19db46bd9a805bed8d79e747"
    },
    {
      address: "\u05e7\u05e0\u05d3\u05dc \u05d4\u05e0\u05e8\u05d9 10, \u05d1\u05d0\u05e8 \u05e9\u05d1\u05e2",
      price: 695000,
      sqm: 96.0,
      num_rooms: 4.0,
      floor: 9.0,
      num_floors: 9.0,
      elevator: 1,
      parking: "without",
      id: "202e23e7e8274cc5b310792aec6a04a7"
    },
    {
      address: "\u05d9\u05d4\u05d5\u05e9\u05e2 \u05d1\u05df \u05e0\u05d5\u05df 4, \u05e0\u05ea\u05e0\u05d9\u05d4",
      price: 900000,
      sqm: 100.0,
      num_rooms: 4.0,
      floor: 0.0,
      num_floors: 1.0,
      elevator: 0,
      parking: "without",
      id: "fce4b6e7b58f4ab89d03ac8e3874d4d4"
    },
    {
      address: "\u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd 15, \u05ea\u05dc \u05d0\u05d1\u05d9\u05d1 -\u05d9\u05e4\u05d5",
      price: 1158000,
      sqm: 48.0,
      num_rooms: 2,
      floor: 3.0,
      num_floors: 6.0,
      elevator: 1,
      parking: "without",
      id: "3e9a292936534398af2ccc02c960506f"
    },
    {
      address: NaN,
      price: "1,761,000",
      sqm: 145.0,
      num_rooms: 6.0,
      floor: 2.0,
      num_floors: 3,
      elevator: 0,
      parking: "without",
      id: "08def2aadbf24727bd1dddae1e8162ab"
    },
    {
      address: " , \u05e4\u05ea\u05d7 \u05ea\u05e7\u05d5\u05d5\u05d4",
      price: 2300000,
      sqm: 100.0,
      num_rooms: 4.0,
      floor: 2.0,
      num_floors: 3.0,
      elevator: "0",
      parking: "without",
      id: "8dea3b439cbd410db84c6e06767eac16"
    }
  ],
  total: 30
}

export default transactions