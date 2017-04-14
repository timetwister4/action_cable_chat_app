App.room = App.cable.subscriptions.create "RoomChannel",
  connected: ->
    console.log("connected")
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    console.log("hit received")
    $('#messages_table').append data.content
