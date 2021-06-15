package config

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/Unleash/unleash-client-go/v3"
)

func Unleash() {
	client, err := unleash.NewClient(
		unleash.WithListener(&unleash.DebugListener{}),
		unleash.WithAppName("unleash-node-service"),
		unleash.WithUrl(os.Getenv("UNLEASH_URL")),
		unleash.WithCustomHeaders(http.Header{"Authorization": {os.Getenv("UNLEASH_TOKEN")}}),
	)

	if err != nil {
		fmt.Printf("ERROR: Starting client: %v", err)
		return
	}

	CheckToggle(client)
}

func CheckToggle(client *unleash.Client) {
	timer := time.NewTimer(1 * time.Second)
	for {
		select {
		case e := <-client.Errors():
			fmt.Printf("ERROR: %v\n", e)
		case w := <-client.Warnings():
			fmt.Printf("WARNING: %v\n", w)
		case <-client.Ready():
			fmt.Printf("READY\n")
		case m := <-client.Count():
			fmt.Printf("COUNT: %+v\n", m)
		case md := <-client.Sent():
			fmt.Printf("SENT: %+v\n", md)
		case cd := <-client.Registered():
			fmt.Printf("REGISTERED: %+v\n", cd)
		case <-timer.C:
			fmt.Printf("ISENABLED: %v\n", client.IsEnabled("unleash-node-service"))
			timer.Reset(1 * time.Second)
		}
	}
}
