import { Actor, Engine, Vector, Label, Font, Color, Random, Input, CollisionGroupManager, CollisionGroup, BoundingBox, EdgeCollider, Scene, Timer, randomInRange} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { player } from '../player.js'

export class testingground extends Scene {
    game;
    userInterface;
    character;
    constructor() {
        super({ width: 1280, height: 720 })
        this.player = new player(this, 1)
        this.player2 = new player(this,2)
    }
    onInitialize(engine) {
        this.game = engine
        engine.input.gamepads.enabled = true;

    }
    onActivate(ctx) {
        console.log("Scene has started");
        this.startGame()
    }
    startGame() {
        this.add(this.player);
    }

    loadEverything() {
      this.add(this.player)
            
    }
    onPreUpdate(game){
      let kb = this.game.input.keyboard
      let controller = this.game.input.gamepads
      if (kb.isHeld(Input.Keys.Enter)) {
        this.add(this.player2)
    }
    }
}