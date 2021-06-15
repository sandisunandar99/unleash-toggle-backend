package config

import (
	"net/http"
	"os"

	"github.com/Unleash/unleash-client-go/v3"
)

func Unleash() {
	unleash.Initialize(
		unleash.WithListener(&unleash.DebugListener{}),
		unleash.WithAppName("my-application"),
		unleash.WithUrl(os.Getenv("UNLEASH_URL")),
		unleash.WithCustomHeaders(http.Header{"Authorization": {os.Getenv("UNLEASH_TOKEN")}}),
	)
}
