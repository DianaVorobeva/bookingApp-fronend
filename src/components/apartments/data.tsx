const houses = [
  {
    id: 1,
    title: "The Pine House",
    images: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1639751898256-e80ef909ea8d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJhdGhyb29tfGVufDB8MHwwfHx8Mg%3D%3D",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpdGNoZW58ZW58MHwwfDB8fHwy",
      },
    ],
    price: 300,
    bedrooms: 1,
    bathrooms: 1,
    capacity: 2,
  },

  {
    id: 2,
    title: "The Forest House",
    images: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmF0aHJvb218ZW58MHwwfDB8fHwy",
      },
    ],
    price: 430,
    bedrooms: 2,
    bathrooms: 2,
    capacity: 4,
  },

  {
    id: 3,
    title: "The Cedar House",
    images: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1585821569331-f071db2abd8d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlZHJvb218ZW58MHwwfDB8fHwy",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1633330977020-2bdfb8530cc2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGxpdmluZyUyMHJvb218ZW58MHwwfDB8fHwy",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1584069793933-57852d7060ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhdGhyb29tfGVufDB8MHwwfHx8Mg%3D%3D",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1596205250168-c3583813eea0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpdGNoZW58ZW58MHwwfDB8fHwy",
      },
    ],
    price: 330,
    bedrooms: 1,
    bathrooms: 1,
    capacity: 2,
  },

  {
    id: 4,
    title: "The Lake House",
    images: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1616486532925-accce4930585?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1538944495092-48fff71fbb0c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1560184897-502a475f7a0d?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1534595038511-9f219fe0c979?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 6,
        image:
          "https://images.unsplash.com/flagged/photo-1570737231926-4d67558ff216?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGJhdGhyb29tfGVufDB8MHwwfHx8Mg%3D%3D",
      },
      {
        id: 7,
        image:
          "https://images.unsplash.com/photo-1634831084227-b2415a684173?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGJhdGhyb29tfGVufDB8MHwwfHx8Mg%3D%3D",
      },
      {
        id: 8,
        image:
          "https://images.unsplash.com/flagged/photo-1573168710465-7f7da9a23a15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGtpdGNoZW58ZW58MHwwfDB8fHwy",
      },
    ],
    price: 490,
    bedrooms: 3,
    bathrooms: 2,
    capacity: 6,
  },

  {
    id: 5,
    title: "The Wood House",
    images: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1530629013299-6cb10d168419?q=80&w=3567&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1635108197046-d6df27a3c9ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJhdGhyb29tfGVufDB8MHwwfHx8Mg%3D%3D",
      },
    ],
    price: 400,
    bedrooms: 2,
    bathrooms: 2,
    capacity: 4,
  },
];

export default houses;
