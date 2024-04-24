import { Socket } from "socket.io-client"

export const sendPlayEvent = (syncSocket: Socket, currentTime: number, waiting: boolean) => {
  if (!waiting) {
    syncSocket.emit('event:play', {
      detail: {
        currentTime
      },
      toRoom: 'demo-party'
    },
      (msg: string) => console.log(msg)
    )
  }
}

export const sendPauseEvent = (syncSocket: Socket, currentTime: number) => {
  syncSocket.emit('event:pause', {
    detail: {
      currentTime
    },
    toRoom: 'demo-party'
  },
    (msg: string) => console.log(msg)
  )
}

export const sendSeekEvent = (detail: number, syncSocket: Socket) => {
  syncSocket.emit('event:seek', {
    detail: {
      currentTime: detail
    },
    toRoom: 'demo-party'
  },
    (msg: string) => console.log(msg)
  )
}

export const sendWaitingEvent = (syncSocket: Socket, currentTime: number) => {
  syncSocket.emit('event:waiting', {
    detail: {
      currentTime
    },
    toRoom: 'demo-party'
  },
    (msg: string) => console.log(msg)
  )
}

export const sendPlayFailEvent = (syncSocket: Socket, currentTime: number) => {
  syncSocket.emit('event:play-fail', {
    detail: {
      currentTime
    },
    toRoom: 'demo-party'
  },
    (msg: string) => console.log(msg)
  )
}
