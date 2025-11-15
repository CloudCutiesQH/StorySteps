{
  description = "StorySteps - Educational storytelling with LLM agents";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        
        # Python environment for LLM backend (when you need it)
        pythonEnv = pkgs.python311.withPackages (ps: with ps; [
          google-generativeai
          fastapi
          uvicorn
          opentelemetry-api
          opentelemetry-sdk
          pydantic
        ]);

      in {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_20
            pnpm
            
            # Python for LLM orchestration 
            # pythonEnv
          ];

          shellHook = ''
            echo "🚀 StorySteps dev environment"
            echo "Node: $(node --version)"
            echo ""
            echo "Run: pnpm install && pnpm dev"
          '';
        };
      }
    );
}
