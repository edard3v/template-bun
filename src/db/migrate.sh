#!/bin/bash

# Sincroniza la migración con la db
bun drizzle-kit migrate

# Envia los cambios del schema directo a la db
# npx drizzle-kit push