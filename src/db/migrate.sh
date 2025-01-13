# Elimina la db
rm -rf src/db/template.db

# Sincroniza la migración con la db
bunx drizzle-kit migrate

# Envia los cambios del schema directo a la db
# npx drizzle-kit push