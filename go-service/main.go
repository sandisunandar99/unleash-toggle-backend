package main

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/Unleash/unleash-client-go/v3"
	"github.com/unleash-toggle-backend/go-service/router"
)

func main() {
	r := router.SetupRouter()

	Unleash()

	r.Run(":4321")
}

func Unleash() {
	unleash.Initialize(
		unleash.WithListener(&unleash.DebugListener{}),
		unleash.WithAppName("unleash-toggle"),
		unleash.WithUrl(os.Getenv("UNLEASH_URL")),
		unleash.WithCustomHeaders(http.Header{"Authorization": {os.Getenv("UNLEASH_TOKEN")}}),
	)

	timer := time.NewTimer(1 * time.Second)

	for {
		<-timer.C
		fmt.Printf("'%s' enabled? %v\n", "unleash-go-service", unleash.IsEnabled("unleash-go-service"))
		timer.Reset(1 * time.Second)
	}

}
