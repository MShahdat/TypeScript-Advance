//& oop - abstraction

//* idea => implementation

/*
  implement
    1. interface
    2. abstract class
 */



    //& using interface
    interface MediaPlayer {
      play() : void
      pause(): void
      stop(): void
    }

    class MusicPlayer implements MediaPlayer{
      play(): void {
        console.log('playing music...')
      }
      
      pause(): void {
        console.log('music pause...')
      }

      stop(): void {
        console.log('music stopped...')
      }
    }

    const myPlayer = new MusicPlayer()
    // myPlayer.play()


    
    //& using abstract class
    abstract class Car{
      abstract start(): void
      abstract pause(): void
      abstract stop(): void
    }

    class myCar extends Car {
      start(): void {
        console.log('car is starting...')
      }

      pause(): void {
        console.log('car is paused...')
      }

      stop(): void {
        console.log('car is stopped...')
      }

      play(){
        console.log('exta method..')
      }
    }

    const mycar = new myCar()
    mycar.play()



