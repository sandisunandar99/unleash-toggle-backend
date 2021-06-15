package main

import (
	"github.com/unleash-toggle-backend/go-service/config"
	"github.com/unleash-toggle-backend/go-service/router"
)

func main() {
	r := router.SetupRouter()

	config.Unleash()

	// go checkUnleash()
	// time.Sleep(time.Second * 5)

	r.Run(":4321")
}

// func checkUnleash() {

// 	for range time.Tick(time.Second * 1) {
// 		if unleash.IsEnabled("unleash-node-service") {
// 			fmt.Println("unleash Enable")
// 		} else {
// 			fmt.Println("unleash Disable")
// 		}
// 	}
// }
