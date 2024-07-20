$ go mod init github.com/devfullcycle/13-GraphQL
$ touch tools.go
$ echo '//go:build tools

package tools

import (
	_ "github.com/99designs/gqlgen"
)' >> tools.go
go mod tidy
go run github.com/99designs/gqlgen init
