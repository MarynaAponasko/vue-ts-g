export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description: 'A collection of must-read books. All-time classics included!',
          price: 99.99
        },
        {
          id: 'p2',
          image:
            'https://www.mountaindesigns.com/medias/BP90141973-treetop-71.jpg-SPOTWF-productHero?context=bWFzdGVyfGltYWdlc3wxMDc4NzN8aW1hZ2UvanBlZ3xpbWFnZXMvaGFmL2g0ZC8xMjU4ODc4OTcyNzI2Mi9CUDkwMTQxOTczLXRyZWV0b3BfNzEuanBnX1NQT1RXRl9wcm9kdWN0SGVyb3xkZjk3OGMwZTQzZmJlMDdmOTQ4NDdjNzIzMDU4ZGVmYTE3ZjU5OWI0YTZhNGMyMjAwMjA1ZjA2NmFmMTNmNGNh',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99
        },
        {
          id: 'p3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description: 'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99
        }
      ]
    }
  },
  getters: {
    products(state) {
      return state.products
    }
  }
}
